import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-purple-900/50 backdrop-blur-md border-t border-purple-500/30 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center gap-8">
          <a href="#" className="text-purple-200 hover:text-white transform hover:scale-110 transition-all">
            <Mail className="w-6 h-6" />
          </a>
          <a href="#" className="text-purple-200 hover:text-white transform hover:scale-110 transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-purple-200 hover:text-white transform hover:scale-110 transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-purple-200 hover:text-white transform hover:scale-110 transition-all">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;