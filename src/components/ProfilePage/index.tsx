import React from 'react';

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

                <EditButton outlined>Editar Perfil</EditButton>

                <h1>Perfil Teste</h1>
                <h2>@perfil_teste</h2>

                <p>
                    Developer at <a href="www.google.com">@Google</a>
                </p>
                <ul>
                    <li>
                        <LocationIcon />
                        São Paulo
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 05 de junho de 1989
                    </li>
                </ul>
                <Followage>
                    <span>
                        seguindo <strong>999</strong>
                    </span>
                    <span>
                        <strong>999</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>
        </Container>

    );
}

export default ProfilePage;
//https://www.youtube.com/watch?v=K-8z_4xvT3o
//parei 1:04:52