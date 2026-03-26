import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObject';
import { Pet } from '../models/pet';

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll()
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list
    });
};

export const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType('dog')
    res.render('pages/page', {
         menu: createMenuObject('dogs'),
        banner: {
            title: 'dogs',
            background: 'banner_dog.jpg'
        }
    });
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')
    res.render('pages/page', {
        menu: createMenuObject('cats'),
        banner: {
            title: 'cats',
            background: 'banner_cat.jpg'
        }
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')
    res.render('pages/page', {
             menu: createMenuObject('fishes'),
        banner: {
            title: 'fishes',
            background: 'banner_fish.jpg'
        }
    });
};

