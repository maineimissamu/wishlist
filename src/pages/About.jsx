import { FaGithub, FaLinkedin } from 'react-icons/fa';

export function About() {
    return (
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-center text-emerald-600 mb-10">About Us</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Samuel Chadwick */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-emerald-700 mb-4">Samuel Chadwick</h2>
                    <p className="text-gray-700 mb-6">Frontend Developer</p>
                    
                    <div className="flex space-x-4">
                        <a href="https://github.com/samuelchadwick" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-gray-800 hover:text-emerald-600 transition-colors">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://linkedin.com/in/samuelchadwick" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-blue-600 hover:text-blue-800 transition-colors">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </div>
                
                {/* Victor Camasita */}
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                    <h2 className="text-2xl font-bold text-emerald-700 mb-4">Victor Camasita</h2>
                    <p className="text-gray-700 mb-6">Frontend Developer</p>
                    
                    <div className="flex space-x-4">
                        <a href="https://github.com/victorcamasita" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-gray-800 hover:text-emerald-600 transition-colors">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://linkedin.com/in/victorcamasita" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="text-blue-600 hover:text-blue-800 transition-colors">
                            <FaLinkedin size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}