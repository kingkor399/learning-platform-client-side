import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCard from './CategoryCard';

const CourseCategory = () => {
    const courses = useLoaderData();
    
    return (
        <div>
            {
                courses.map(course => <CategoryCard
                    key={course._id}
                    course={course}
                ></CategoryCard>)
            }
        </div>
    );
};

export default CourseCategory;