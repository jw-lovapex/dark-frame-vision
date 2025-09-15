import { motion } from 'framer-motion';

const techStack = [
  { name: 'Stable Diffusion', category: 'Image Gen' },
  { name: 'RunwayML', category: 'Video AI' },
  { name: 'MidJourney', category: 'Creative AI' },
  { name: 'ComfyUI', category: 'Workflow' },
  { name: 'After Effects', category: 'Post-Production' },
  { name: 'DaVinci Resolve', category: 'Color Grading' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Pioneering AI Creativity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Leveraging state-of-the-art AI models and creative workflows to produce 
            stunning visual narratives that blur the line between human and machine creativity.
          </p>
        </motion.div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass-effect rounded-xl p-6 text-center group cursor-pointer"
            >
              <div className="mb-3">
                <div className="w-12 h-12 mx-auto rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                  <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-accent" />
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-1">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">{tech.category}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-16"
        >
          {[
            { number: '500+', label: 'Videos Generated' },
            { number: '50M+', label: 'Total Views' },
            { number: '100+', label: 'Happy Clients' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold gradient-text mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;