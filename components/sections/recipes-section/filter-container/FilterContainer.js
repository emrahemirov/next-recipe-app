import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/router';
//Style
import {
  StyledFilterContainer,
  Input,
  Select,
  Option,
  SearchButton
} from './FilterContainer.styled';

const FilterContainer = () => {
  const { t } = useTranslation();
  const selectRef = useRef();
  const searchInputRef = useRef();
  const pageInputRef = useRef();
  const router = useRouter();

  const handleSearch = () => {
    const category =
      selectRef.current.value != '' ? selectRef.current.value : undefined;

    const searchInput =
      searchInputRef.current.value.trim() != ''
        ? searchInputRef.current.value.trim()
        : undefined;

    const pageInput =
      pageInputRef.current.value.trim() != ''
        ? pageInputRef.current.value.trim()
        : '1';

    let queryString = `?pageIndex=${pageInput - 1}`;
    if (category) queryString += `&category=${category}`;
    if (searchInput) queryString += `&headerIncludes=${searchInput}`;

    router.push(`${router.pathname}/${queryString}`);
  };

  let options = [];

  for (let i = 1; i < 11; i++) {
    options.push(
      <Option key={uuidv4()} value={`category${i}`}>{`Category${i}`}</Option>
    );
  }

  return (
    <StyledFilterContainer direction='row' axisX='center' axisY='center'>
      <Input
        placeholder={t('recipesPage:searchInputPlaceholder')}
        ref={searchInputRef}
      />
      <Input
        type='number'
        placeholder={t('recipesPage:pageInputPlaceholder')}
        ref={pageInputRef}
      />
      <Select ref={selectRef}>
        <Option defaultValue value=''>
          {t('recipesPage:select')}
        </Option>
        {options}
      </Select>
      <SearchButton
        onClick={handleSearch}
        direction='row'
        axisX='center'
        axisY='center'
        hoverScale={true}
        activeScale={true}
      >
        <Image src='/icons/search.svg' alt='search' width='15' height='15' />
      </SearchButton>
    </StyledFilterContainer>
  );
};

export default FilterContainer;
