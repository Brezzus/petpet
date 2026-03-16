import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        }
    });
};

export const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'dogs',
            background: 'banner_dog.jpg'
        }
    });
};

export const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'cats',
            background: 'banner_cat.jpg'
        }
    });
};

export const fishes = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'fishes',
            background: 'banner_fish.jpg'
        }
    });
};