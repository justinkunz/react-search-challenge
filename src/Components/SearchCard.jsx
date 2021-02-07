import React from 'react';
import styled from 'styled-components';
import { Flexbox, Card } from './shared';

const Avatar = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
`;

const CardContent = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  border-radius: inherit;
  overflow: hidden;
`;

const CardTextContainer = styled.div`
  color: white;
  width: 100%;
`;

const UserHandle = styled.h6`
  font-size: 16px;
`;

const PhotoCountContainer = styled.div`
  display: inline-block;
  height: 15px;
`;

const PhotoCountText = styled.div`
  margin-right: 4px;
`;

export default function SearchCard({
  photoUrl = '',
  handle = '',
  location = '',
  age = 99,
  photoCount = 0,
}) {
  return (
    <Flexbox align="center" justify="center">
      <Card>
        <Avatar>
          <img src={photoUrl} alt="potential date" />
          <CardContent>
            <Flexbox align="flex-end" justify="space-between" m={8}>
              <CardTextContainer>
                <Flexbox direction="column">
                  <UserHandle>
                    <Flexbox align="center" marginBottom={4}>
                      {handle}
                    </Flexbox>
                  </UserHandle>

                  <Flexbox justify="space-between" align="baseline">
                    <Flexbox align="center" marginBottom={4}>
                      <span>{location ? `${age} • ${location}` : age}</span>
                    </Flexbox>
                    <PhotoCountContainer>
                      {photoCount > 1 && <PhotoCountText>{photoCount}</PhotoCountText>}
                    </PhotoCountContainer>
                  </Flexbox>
                </Flexbox>
              </CardTextContainer>
            </Flexbox>
          </CardContent>
        </Avatar>
      </Card>
    </Flexbox>
  );
}
