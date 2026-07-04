import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-xl border-b-4 border-primary">
      <div className="w-12 h-12 rounded-lg bg-secondary-container flex items-center justify-center text-secondary mb-6">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h4 className="font-h3 text-lg mb-4">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;