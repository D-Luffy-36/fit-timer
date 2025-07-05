import pullUp from './pull-up.jpg';
import pushUp from './push-up.jpg';
import squat from './squat.jpg';

export const workouts = [
    {
        title: 'Pushups',
        description: 'Do 30 pushups',
        image: pushUp, // Gán đúng biến ảnh
        time: 1000 * 60 * 1,
    },
    {
        title: 'Squats',
        description: 'Do 30 squats',
        image: squat,
        time: 1000 * 60 * 1,
    },
    {
        title: 'Pullups',
        description: 'Do 10 pullups',
        image: pullUp,
        time: 1000 * 60 * 1,
    },
];
