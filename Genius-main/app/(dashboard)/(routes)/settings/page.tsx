"use client";

import React from 'react';

const Setting = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="lg:flex">
        <div className="lg:w-1/2">
          {/* General Settings */}
          <div className="bg-white rounded-lg p-4 mb-4 lg:mb-0">
            <h2 className="text-xl font-semibold mb-2">General Settings</h2>
            {/* Your general settings components and content go here */}
            <p className="text-sm">General settings content goes here.</p>
          </div>
        </div>

        <div className="lg:w-1/2">
          {/* Advanced Settings */}
          <div className="bg-white rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Advanced Settings</h2>
            {/* Your advanced settings components and content go here */}
            <p className="text-sm">Advanced settings content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
