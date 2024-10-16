import React from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';

interface NavMixedProps {
  onSelectItem: (selectedItem: string) => void; // Pass a function to control content
}

export const NavMixed: React.FunctionComponent<NavMixedProps> = ({ onSelectItem }) => {
  const [activeGroup, setActiveGroup] = React.useState('');
  const [activeItem, setActiveItem] = React.useState('ungrouped_item-1');

  const onSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    result: { itemId: number | string; groupId: number | string | null }
  ) => {
    setActiveGroup(result.groupId as string);
    setActiveItem(result.itemId as string);

    // Update the selected item content based on the clicked item
    switch (result.itemId) {
      case 'ungrouped_item-1':
        onSelectItem('Dashboard');
        break;
      case 'nav-mixed-group-1_item-1':
        onSelectItem('CheckPoint');
        break;
      case 'nav-mixed-group-1_item-2':
        onSelectItem('Palo Alto');
        break;
      case 'nav-mixed-group-1_item-3':
        onSelectItem('Forti');
        break;
      case 'nav-mixed-group-1_item-4':
        onSelectItem('Cisco ASA');
        break;
      case 'ungrouped_item-2':
        onSelectItem('User Information');
        break;
      default:
        onSelectItem('');
    }
  };

  return (
    <Nav onSelect={onSelect} aria-label="Mixed global">
      <NavList>
        <NavItem
          preventDefault
          id="mixed-1"
          to="#mixed-1"
          itemId="ungrouped_item-1"
          isActive={activeItem === 'ungrouped_item-1'}
        >
          Dashboard
        </NavItem>
        <NavExpandable
          title="Migration"
          groupId="nav-mixed-group-1"
          isActive={activeGroup === 'nav-mixed-group-1'}
        >
          <NavItem
            preventDefault
            id="mixed-2"
            to="#mixed-2"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-1"
            isActive={activeItem === 'nav-mixed-group-1_item-1'}
          >
            CheckPoint
          </NavItem>
          <NavItem
            preventDefault
            id="mixed-3"
            to="#mixed-3"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-2"
            isActive={activeItem === 'nav-mixed-group-1_item-2'}
          >
            Palo Alto
          </NavItem>
          <NavItem
            preventDefault
            id="mixed-4"
            to="#mixed-4"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-3"
            isActive={activeItem === 'nav-mixed-group-1_item-3'}
          >
            Forti
          </NavItem>
          <NavItem
            preventDefault
            id="mixed-5"
            to="#mixed-5"
            groupId="nav-mixed-group-1"
            itemId="nav-mixed-group-1_item-4"
            isActive={activeItem === 'nav-mixed-group-1_item-4'}
          >
            Cisco ASA
          </NavItem>
        </NavExpandable>
        <NavItem
          preventDefault
          id="mixed-6"
          to="#mixed-6"
          itemId="ungrouped_item-2" // Unique itemId for User Information
          isActive={activeItem === 'ungrouped_item-2'}
        >
          User Information
        </NavItem>
      </NavList>
    </Nav>
  );
};
