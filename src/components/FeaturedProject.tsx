import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';

const FeaturedProject = () => {
  return (
    <section id="featured" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Project</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12">Latest AI-generated masterpiece</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Preview */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={project1} 
                alt="AI Generated Video" 
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Play Button Overlay */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
              </motion.div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-3xl -z-10 group-hover:opacity-30 transition-opacity duration-500" />
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Neural Dreams</h3>
              <p className="text-muted-foreground mb-6">
                An exploration of consciousness through AI-generated visuals. This project pushes the boundaries 
                of what's possible when machine learning meets creative expression, resulting in a mesmerizing 
                journey through abstract neural landscapes.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">Stable Diffusion</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">RunwayML</span>
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm">After Effects</span>
              </div>

              <div className="flex gap-4">
                <Button variant="glow" size="lg" className="group">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Full Video
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Case Study
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;