import { Star } from 'lucide-react';
import { Card } from './ui/Card';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Finding a reliable cook used to take weeks of asking around. With Cudago, I had a verified professional at my doorstep in 40 minutes. Simply life-changing!",
      author: "Priya Sharma",
      location: "Forest County, Kharadi",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ARS66FDNMtkBbZrItQPZS9fYKDnmSIwF6t4z6Qr_v5epwwyhMbZ2VqMnnTY6tK-iFDgsDYJipu-XROIW_6G3IrlYuZBpOd2SKkZmhIMIaBuN8Vny5mpsS7vMNwtCQuIDAAHE8cuf7TgrvT3iyR9zzDqk7Yn7bhv6ygJDSCTZBkrxgKbAnxW4-CNvdsJolbckm7Ahw2ocpsjFnCRaRsvU5FxBWnHvHA9pfATeTkffIOuFVPJUbmdI5F3qxY8hmBoE1VPFzK8ea5k"
    },
    {
      quote: "The replacement guarantee is the real winner. My regular maid was on leave, and Cudago sent an equally good helper immediately. No stress at all.",
      author: "Amit Verma",
      location: "Ganga Constella",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAVqv0-92mOAgYA_cOw7uqGAhQPNF5ZNnzzqydPJPc8H4HuQcAd3STYAmurTj453uFr1ozM0DjVBMDbChb2d4qz2kH33yreDHN07BNNuj28JeJuWVJMATXs8W_eR_35sEO5y1iY9N2wn3iat-GYE18lOPlrow2CzsSCwV3j41OsQ8vyO2mfHqkhXKsf_eVi5U8a8cenCg1ZiCek1Q6T7-9WhTp58-O2zZzUagy45A_GuahY687SmHgGLzw9ExUL1uXNqgv4lGKO82Y"
    },
    {
      quote: "Verified and local. I love that I'm supporting people from our own neighborhood ecosystem. The interface is also incredibly smooth.",
      author: "Mrs. Kapur",
      location: "Eon Waterfront",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNFOumU5Kv__QkCnVlaIRbPmyp-dXdfZpKlFsLPo6ZgzOsyDBo1BFny2OvwA8Wj7TutpYRfTlZgRrMhTiR70S0zZN71xQZUHdWUYeRmvTqqWAKVl5-aSR5Su0gvJDfWY-TZ4YI-MjCZFeDtengYw03QJx7Lr-cFJyW8e-LgjpC5B-_Q1_ByPqgR4zaXzwbcU4CxpJjtEnvnvKPsa6SESM7qL7AMfAWgnNA2gsfDVFRZ2P5h7JxiLAY1n-nD51SPnRsNEZkul_99hY"
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary">Loved by your neighbors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="p-8">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>
              <p className="text-on-surface-variant italic mb-8 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={t.image} alt={t.author} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-on-surface">{t.author}</p>
                  <p className="text-sm text-on-surface-variant">{t.location}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
