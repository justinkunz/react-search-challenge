import React from 'react';
import { useHistory } from 'react-router-dom';
import { Flexbox, Card } from '../../Shared';
import Avatar from './Avatar';
import CardContent from './CardContext';
import UserImage from './UserImage';
import UserHandle from './UserHandle';
import CardTextContainer from './CardTextContainer';
import AgeLocationText from './AgeLocationText';

export default function SearchCard({
  photoUrl = '',
  name = '',
  location = '',
  age = 99,
  username = '',
}) {
  const history = useHistory();
  const handleCardClick = () => history.push(`/profile/${username}`);
  return (
    <Flexbox align="center" justify="center">
      <Card>
        <Avatar onClick={handleCardClick}>
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
