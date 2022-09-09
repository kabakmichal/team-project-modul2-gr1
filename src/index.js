import './sass/index.scss';

import { fetchOnStart } from './js/fetch';
import {movieSet} from './js/movieSet';

fetchOnStart()
    .then(data => {
        JSON.parse(data);
        return movieSet(data.results)
    })
    .catch(err => { return console.error(err)})
=======
