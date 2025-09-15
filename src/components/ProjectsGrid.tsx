import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const projects = [
  {
    id: 1,
    title: 'Neural Dreams',
    category: 'Abstract AI Art',
    image: project1,
    duration: '2:34',
  },
  {
    id: 2,
    title: 'Ethereal Landscapes',
    category: 'Environment Design',
    image: project2,
    duration: '3:12',
  },
  {
    id: 3,
    title: 'Data Consciousness',
    category: 'Experimental',
    image: project3,
    duration: '1:58',
  },
  {
    id: 4,
    title: 'Cyber Dreams',
    category: 'Sci-Fi Narrative',
    image: project4,
    duration: '4:21',
  },
];

const ProjectsGrid = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Recent Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Explore the latest AI-generated visual experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl">
                {/* Image Container */}
                <div className="relative aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Play Button */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center"
                    >
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-medium">
                    {project.duration}
                  </div>
                </div>
                
                {/* Project Info */}
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;