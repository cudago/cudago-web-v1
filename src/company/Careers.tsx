import { useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { Link } from 'react-router-dom';
import { JOBS, Job } from '../data/jobs';
import { Button } from '../components/ui/Button';
import { Search, MapPin, Briefcase, ChevronDown, ChevronUp, CheckCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Careers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);

  const departments = ['All', 'Design', 'Engineering', 'Marketing', 'Operations'];

  // Filter jobs based on search query and selected department
  const filteredJobs = JOBS.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.about.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const toggleExpand = (jobId: string) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  return (
    <PageLayout title="Join the Cudago Team" subtitle="Help us redefine how urban households manage their daily needs.">
      {/* Introduction & Culture Section */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6">Building the Future of Hyperlocal Services</h2>
        <p className="text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed">
          At Cudago, we're on a mission to redefine how urban households manage their daily needs. We're building a digital concierge that brings trust, reliability, and convenience to hyperlocal services. We're looking for passionate individuals who love solving real-world problems.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-surface-container-low p-6 md:p-8 rounded-3xl border border-surface-container-high hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-primary-fixed flex items-center justify-center mb-4">
              <span className="text-primary text-xl font-bold font-headline">C</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Our Culture</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              We value ownership, empathy, and speed. We're a small, high-impact team that believes in solving real-world problems with elegant, customer-centric technology.
            </p>
          </div>
          <div className="bg-surface-container-low p-6 md:p-8 rounded-3xl border border-surface-container-high hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-2xl bg-secondary-fixed flex items-center justify-center mb-4">
              <span className="text-secondary text-xl font-bold font-headline">B</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-primary">Benefits</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Competitive compensation, flexible work arrangements, comprehensive health coverage, and the unique opportunity to shape a high-growth product from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section className="mb-12 border-t border-outline-variant pt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="text-2xl font-extrabold text-primary">Open Positions</h2>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant/60" size={18} />
            <input
              type="text"
              placeholder="Search roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-surface-container-high bg-surface-container-low focus:bg-white focus:border-primary focus:outline-none transition-all text-sm"
            />
          </div>
        </div>

        {/* Department Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {departments.map((dept) => {
            const isActive = selectedDept === dept;
            return (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {dept}
              </button>
            );
          })}
        </div>

        {/* Roles List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => {
                const isExpanded = expandedJobId === job.id;
                return (
                  <motion.div
                    layout
                    key={job.id}
                    className={`bg-white border rounded-3xl overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? 'border-primary shadow-md'
                        : 'border-surface-container-high hover:border-primary/50'
                    }`}
                  >
                    {/* Header Summary Row */}
                    <div
                      onClick={() => toggleExpand(job.id)}
                      className="p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 cursor-pointer select-none group"
                    >
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-extrabold text-lg text-on-surface group-hover:text-primary transition-colors">
                            {job.title}
                          </h4>
                          <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-primary-fixed text-primary">
                            {job.department}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-on-surface-variant text-sm font-medium">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-primary" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase size={14} className="text-secondary" />
                            {job.type}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-end sm:self-center font-bold text-sm text-primary group-hover:translate-x-0.5 transition-transform">
                        <span>{isExpanded ? 'Collapse' : 'View Details'}</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </div>
                    </div>

                    {/* Collapsible Details */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="border-t border-surface-container-high bg-surface/30"
                        >
                          <div className="p-6 md:p-8 space-y-6">
                            {/* About */}
                            <div>
                              <h5 className="font-extrabold text-primary mb-2 text-sm uppercase tracking-wider">About the Role</h5>
                              <p className="text-on-surface-variant leading-relaxed text-sm md:text-base">
                                {job.about}
                              </p>
                            </div>

                            {/* Two-Column lists */}
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <h5 className="font-extrabold text-primary mb-3 text-sm uppercase tracking-wider">Key Responsibilities</h5>
                                <ul className="space-y-2">
                                  {job.responsibilities.map((resp, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                                      <CheckCircle size={16} className="text-primary mt-0.5 shrink-0" />
                                      <span>{resp}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h5 className="font-extrabold text-primary mb-3 text-sm uppercase tracking-wider">Requirements</h5>
                                <ul className="space-y-2">
                                  {job.requirements.map((req, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                                      <CheckCircle size={16} className="text-secondary mt-0.5 shrink-0" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h5 className="font-extrabold text-primary mb-3 text-sm uppercase tracking-wider">Benefits</h5>
                              <div className="flex flex-wrap gap-2">
                                {job.benefits.map((benefit, i) => (
                                  <span key={i} className="px-3 py-1.5 rounded-xl bg-surface-container-low text-on-surface-variant text-xs font-semibold border border-surface-container-high">
                                    ✨ {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Apply Action CTA */}
                            <div className="pt-4 flex justify-end">
                              <Link to={`/apply?jobId=${job.id}`}>
                                <Button className="flex items-center gap-2 group">
                                  Apply for this Role
                                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-3xl border border-surface-container-high"
              >
                <Briefcase className="mx-auto text-on-surface-variant/40 mb-4" size={40} />
                <h4 className="font-bold text-lg text-on-surface mb-1">No roles matching your criteria</h4>
                <p className="text-on-surface-variant text-sm">Try resetting your filters or modifying your search query.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* General Resume Submission */}
      <section className="mt-8 text-center bg-surface-container-low border border-surface-container-high rounded-[2rem] p-6 md:p-8">
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
          Don't see a role that fits? We are always looking for exceptional talent.{' '}
          <Link to="/apply?jobId=general-application" className="text-primary font-extrabold hover:underline">
            Submit a general application
          </Link>{' '}
          or email us directly at <span className="text-primary font-bold">cudagoplatform@gmail.com</span>.
        </p>
      </section>
    </PageLayout>
  );
};
