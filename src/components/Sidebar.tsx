import React from 'react';
import { Nav, NavExpandable, NavItem, NavList } from '@patternfly/react-core';
import {useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeItem: string;
  setActiveItem: (string) => void; 
  activeGroup: string
  setActiveGroup: (string)=>void;
}

export const Sidebar: React.FunctionComponent<SidebarProps> = ({ activeItem,setActiveItem,activeGroup,setActiveGroup }) => {
  const navigate = useNavigate();
  const onSelect = (
    _event: React.FormEvent<HTMLInputElement>,
    result: { itemId: number | string; groupId: number | string | null }
  ) => {
    setActiveItem(result.itemId as string);
    switch (result.itemId) {
      case 'ungrouped_item-1':
        setActiveGroup('Dashboard');
        navigate('Dashboard');
        break;
      case 'nav-mixed-group-1_item-1':
        setActiveGroup('CheckPoint');
        navigate('CheckPoint');
        break;
      case 'nav-mixed-group-1_item-2':
        setActiveGroup('Palo Alto');
        navigate('PaloAlto');
        break;
      case 'nav-mixed-group-1_item-3':
        setActiveGroup('Forti');
        navigate('Forti');
        break;
      case 'nav-mixed-group-1_item-4':
        setActiveGroup('Cisco ASA');
        navigate('CiscoASA');
        break;
      case 'ungrouped_item-2':
        setActiveGroup('User Information');
        navigate('UserInformation');
        break;
      default:
        setActiveGroup('');
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
