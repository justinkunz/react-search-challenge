import React from 'react';
import { useHistory } from 'react-router-dom';
import { Flexbox, Card } from '../../Shared';
import images from '../../../assets';
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

  /**
   * On Profile select,
   * Redirect to selected profile
   */
  const redirectToProfile = () => history.push(`/profile/${username}`);

  return (
    <Flexbox align="center" justify="center">
      <Card>
        <Avatar onClick={redirectToProfile}>
          <UserImage src={photoUrl || images.defaultUser} alt="potential date" />
          <CardContent>
            <Flexbox align="flex-end" justify="space-between">
              <CardTextContainer>
                <Flexbox column>
                  <UserHandle>
                    <Flexbox mb align="center">
                      {name}
                    </Flexbox>
                  </UserHandle>

                  <Flexbox justify="space-between" align="baseline">
                    <Flexbox mb align="center">
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
