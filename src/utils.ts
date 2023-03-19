import { SvgIcon } from '@mui/material';
import { ElementType } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

export const getHeaders = <T>(data: T | undefined) => Object.keys(data ?? {});

export const iconByCollapseStatus: Record<number, typeof SvgIcon | ElementType> = {
  1: ArrowDropDownIcon,
  0: ArrowRightIcon,
};

export const getCollapseIcon = (openCollapse: number) => iconByCollapseStatus[openCollapse];

export const getOddColor = (index: number) => (index % 2 === 0 ? 'secondary.main' : 'secondary.dark');

export const reload = () => {
  window.location.reload();
};
