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

const UserImage = styled.img`
  height: 100%;
`;

const CardTextContainer = styled.div`
  color: white;
  width: 100%;
  background: linear-gradient(0deg, black, transparent);
  padding: 8px;
`;

const UserHandle = styled.h6`
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
`;

const AgeLocationText = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
`;

export default function SearchCard({
  photoUrl = '',
  name = '',
  location = '',
  age = 99,
  photoCount = 0,
}) {
  return (
    <Flexbox align="center" justify="center">
      <Card>
        <Avatar>
          <UserImage src={photoUrl} alt="potential date" />
          <CardContent>
            <Flexbox align="flex-end" justify="space-between">
              <CardTextContainer>
                <Flexbox direction="column">
                  <UserHandle>
                    <Flexbox align="center" marginBottom={4}>
                      {name}
                    </Flexbox>
                  </UserHandle>

                  <Flexbox justify="space-between" align="baseline">
                    <Flexbox align="center" marginBottom={4}>
                      <AgeLocationText>{location ? `${age} • ${location}` : age}</AgeLocationText>
                    </Flexbox>
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
