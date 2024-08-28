import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { DetailBook } from './datail-book';

export interface IBook {
  img: string;
  title: string;
  description: string;
  page_number: number;
  published: string;
  publisher: string;
  language: string;
  origin_title: string;
  isbn10: string;
  isbn13: string;
  review: string;
  img_alt: string;
}

const bookMock: IBook = {
  img: 'https://fakeimg.pl/240x350/',
  img_alt: 'Fake Image',
  title: 'Change By Design Second line',
  description: 'Tim Brown, Julie Zhuo, Fried Maximiilian',
  page_number: 306,
  published: '',
  publisher: '',
  language: '',
  origin_title: '',
  isbn10: '',
  isbn13: '',
  review: '',
};

describe('Page', () => {
  render(<DetailBook {...bookMock} />);
  it('renders image', () => {
    const imageElement = screen.getByAltText('Fake Image');
    expect(imageElement).toBeInTheDocument();
  });

  it('renders title', () => {
    const headingElement = screen.getByRole('heading', {
      level: 1,
      name: /Change By Design Second line/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders description', () => {
    const headingElement = screen.getByRole('heading', {
      level: 6,
      name: /Tim Brown, Julie Zhuo, Fried Maximiilian/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
