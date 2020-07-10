import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Jonas Adam</h1>
        <h2>@adam_jonas</h2>

        <p>
          Time traveler at <a href="https://google.com.br">@Earth_2</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Winden, Alemanha
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 5 de junho de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>999</strong>
          </span>
          <span>
            <strong>999 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
