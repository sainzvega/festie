import artistList from 'data/artists.json';
import shows from 'data/shows.json';
import { each, find } from 'lodash';
import { format, isSameDay } from 'date-fns';

const DATE_FORMAT = 'MM/DD/YYYY';

export const getArtistsByShowDate = (date) => {
    const formattedShowDate = format(date, DATE_FORMAT);
    const filteredArtist = [];

    each(shows, ({ artist_id, date_start }) => {
        const showDate = format(date_start, DATE_FORMAT);
        if (isSameDay(formattedShowDate, showDate))
            filteredArtist.push(artistList[artist_id]);
    });

    return filteredArtist;
};

export const getArtistsById = (artist_id) => artistList[artist_id];
export const getArtistByName = (name) => find(artistList, ({ slug }) => slug === name);
