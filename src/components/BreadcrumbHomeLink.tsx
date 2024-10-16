import React from 'react';
import { Breadcrumb, BreadcrumbItem } from '@patternfly/react-core';

interface BreadcrumbProps {
  items: { name: string; link?: string; isActive?: boolean }[];
}

export const BreadcrumbHomeLink: React.FunctionComponent<BreadcrumbProps> = ({ items }) => (
  <Breadcrumb>
    {items.map((item, index) => (
      <BreadcrumbItem key={index} to={item.link} isActive={item.isActive}>
        {item.name}
      </BreadcrumbItem>
    ))}
  </Breadcrumb>
);
