import React from 'react';
import {
  Button,
  OverflowMenu,
  OverflowMenuControl,
  OverflowMenuContent,
  OverflowMenuGroup,
  OverflowMenuItem,
  OverflowMenuDropdownItem,
  MenuToggle,
  Dropdown,
  DropdownList
} from '@patternfly/react-core';
import { Table, Thead, Tr, Th, Tbody, Td } from '@patternfly/react-table';
import EllipsisVIcon from '@patternfly/react-icons/dist/esm/icons/ellipsis-v-icon';

interface Repository {
  username: string;
  Ip_Address: string;
  lastEdit: string;
  isMenuOpen: boolean;
}

export const Table_custom: React.FunctionComponent = () => {
  // In real usage, this data would come from some external source like an API via props.
  const repositories: Repository[] = [
    { username: 'one', Ip_Address: '35.222.14.512', lastEdit: '25-04-2012', isMenuOpen: false },
    { username: 'two', Ip_Address: '35.222.14.512', lastEdit: '25-04-2012', isMenuOpen: false },
    { username: 'three', Ip_Address: '35.222.14.512', lastEdit: '25-04-2012', isMenuOpen: false },
    { username: 'four', Ip_Address: '35.222.14.512', lastEdit: '25-04-2012', isMenuOpen: false },
    { username: 'five', Ip_Address: '35.222.14.512', lastEdit: '25-04-2012', isMenuOpen: false } ,
  ];

  const [repos, setRepos] = React.useState(repositories);

  const columnNames = {
    username: 'repositories',
    Ip_address: 'Ip_Address',
    lastEdit: 'LastEdit'
  };

  const dropdownItems = [
    <OverflowMenuDropdownItem itemId={0} key="item1" isShared>
      Edit_Host
    </OverflowMenuDropdownItem>,
    <OverflowMenuDropdownItem itemId={1} key="item2" isShared>
      Delete_Host
    </OverflowMenuDropdownItem>
  ];

  return (
    <React.Fragment>
      <Table style={{marginTop:'30px'}} aria-label="Actions table">
        <Thead>
          <Tr>
            <Th>{columnNames.username}</Th>
            <Th>{columnNames.Ip_address}</Th>
            <Th>{columnNames.lastEdit}</Th>
            <Th screenReaderText="Actions" />
          </Tr>
        </Thead>
        <Tbody>
          {repos.map((repo) => (
            <Tr key={repo.username}>
              <Td dataLabel={columnNames.username}>{repo.username}</Td>
              <Td dataLabel={columnNames.Ip_address}>{repo.Ip_Address}</Td>
              <Td dataLabel={columnNames.lastEdit}>{repo.lastEdit}</Td>
              <Td isActionCell>
                <OverflowMenu breakpoint="lg">
                  <OverflowMenuContent>
                    <OverflowMenuGroup groupType="button">
                      <OverflowMenuItem>
                        <Button variant="secondary">Edit_Host</Button>
                      </OverflowMenuItem>
                      <OverflowMenuItem>
                        <Button variant="tertiary">Delete_Host</Button>
                      </OverflowMenuItem>
                    </OverflowMenuGroup>
                  </OverflowMenuContent>
                  <OverflowMenuControl>
                    <Dropdown
                      onSelect={() =>
                        setRepos(repos.map((r) => (r.username !== repo.username ? r : { ...r, isMenuOpen: !r.isMenuOpen })))
                      }
                      toggle={(toggleRef) => (
                        <MenuToggle
                          ref={toggleRef}
                          variant="plain"
                          aria-label="Table actions overflow menu"
                          onClick={() =>
                            setRepos(repos.map((r) => (r.username !== repo.username ? r : { ...r, isMenuOpen: !r.isMenuOpen })))
                          }
                          isExpanded={repo.isMenuOpen}
                        >
                          <EllipsisVIcon />
                        </MenuToggle>
                      )}
                      isOpen={repo.isMenuOpen}
                      onOpenChange={(isOpen) =>
                        setRepos(repos.map((r) => (r.username !== repo.username ? r : { ...r, isMenuOpen: isOpen })))
                      }
                    >
                      <DropdownList>{dropdownItems}</DropdownList>
                    </Dropdown>
                  </OverflowMenuControl>
                </OverflowMenu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </React.Fragment>
  );
};
