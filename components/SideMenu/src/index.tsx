import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Octicon, { ThreeBars, Person } from '@primer/octicons-react';
import useMedia from './useMedia';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    background-color: steelblue;
    color: aliceblue;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    .user {
      display: flex;
      flex-direction: row;
      .userName {
        margin-left: 10px;
      }
    }
  }
  .contentContainer {
    flex: 1;
    display: flex;
    flex-direction: row;
    nav {
      background-color: lightsteelblue;
      color: steelblue;
      padding: 10px;
      min-width: 150px;
    }
    .content {
      background-color: aliceblue;
      flex: 1;
      display: flex;
      align-items: stretch;
      justify-content: center;
      padding: 10px;
    }
  }
`;

export const SideMenu = ({ children }: { children: Node }) => {
  const { xs } = useMedia();

  const [open, setOpen] = useState(() => !xs);
  const toggle = () => setOpen(o => !o);
  useEffect(() => {
    setOpen(!xs);
  }, [xs]);

  return (
    <Container>
      <header>
        <div role="presentation" onClick={toggle}>
          {xs ? <Octicon icon={ThreeBars} /> : <div>CompanyLogo</div>}
        </div>
        <div className="user">
          <Octicon icon={Person} />
          {!xs && <div className="userName">Tuija Karling</div>}
        </div>
      </header>
      <div className="contentContainer">
        {open && <nav>sidemenu</nav>}
        <div className="content">{children}</div>
      </div>
    </Container>
  );
};

export default SideMenu;
