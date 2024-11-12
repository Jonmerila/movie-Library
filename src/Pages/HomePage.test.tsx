import {beforeEach, describe, it} from 'vitest';
import { render, screen} from '@testing-library/react';
import HomePage from './HomePage';

beforeEach(() => render(<HomePage/>));

describe('HomePage Components testing', () => {

    
    it('should have a heading with the text MovieFlix', () => {
        //adding $ in the regex says that the name has to end with MovieFlix
        screen.getByRole('heading', {name: /MovieFlix/i})
    })
})