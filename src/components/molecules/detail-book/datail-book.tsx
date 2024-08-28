import Image from 'next/image';

import { DetailBookInformationRow } from '../detail-book-information-row/detail-book-information-row';
import { IBook } from './datail-book.spec';

export const DetailBook = ({
  title,
  origin_title,
  img,
  description,
  review,
  language,
  isbn10,
  isbn13,
  page_number,
  published,
  publisher,
  img_alt,
}: IBook) => {
  return (
    <div>
      <Image src={img} alt={img_alt} width={240} height={350} />
      <h1>{title}</h1>
      <h6>{description}</h6>

      <div>
        <h4>Informações</h4>
        <DetailBookInformationRow label={'Paginas'} field={page_number} />
        <DetailBookInformationRow label={'Editora'} field={publisher} />
        <DetailBookInformationRow label={'Pulicação'} field={published} />
        <DetailBookInformationRow label={'Idioma'} field={language} />
        <DetailBookInformationRow
          label={'Titulo original'}
          field={origin_title}
        />
        <DetailBookInformationRow label={'ISBN-10'} field={isbn10} />
        <DetailBookInformationRow label={'ISBN-13'} field={isbn13} />
      </div>

      <div>
        <h4>Informações</h4>
        <h5>{review}</h5>
      </div>
    </div>
  );
};
