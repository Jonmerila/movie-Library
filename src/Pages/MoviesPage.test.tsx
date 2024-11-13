import {describe, it, expect, beforeEach} from 'vitest';
import {screen, render} from '@testing-library/react'
import MoviesPage from './MoviesPage';

beforeEach(() => render(<MoviesPage/>))

describe("MoviesPage component", () => {
    
    it("should have a heading with the text Populära filmer", () => {
        screen.getByRole("heading", {name: /filmer$/i})
    })
   

describe('MoviesPage REST API call', () => {
    it("should display image for each movie", async () => {
        const images = await screen.findAllByRole("img");
        expect(images).toHaveLength(2);

        //@ts-expect-error: ignore alt problem
        const altTitles = images.map((elem) => elem.alt);
        expect(altTitles).toEqual(["Venom: The Last Dance", "Terrifier 3"])

    })
})
})