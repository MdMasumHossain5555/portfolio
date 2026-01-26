'use client'
import React from 'react'
import { useState } from 'react'


function ProjectCategory({ categories, onCategoryChange }) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        onCategoryChange(category);
    }
    return (
        <div className='flex gap-4 mt-10 justify-center width-full flex-wrap'>
            {categories.map((category, index) => (
                <button key={index} onClick={() => {
                    handleCategoryClick(category);
                }} className={`${selectedCategory === category ? 'btn-primary' : 'btn-outline'} !rounded-3xl !font-light !border flex items-center h-13
                  transition-colors duration-300`}>
                    <h3 className="text-sm">{category}</h3>
                </button>
            ))}
        </div>
    )
}

export default ProjectCategory
