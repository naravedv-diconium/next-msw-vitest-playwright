import {http, HttpResponse} from 'msw';

import ed from './data/ed.json';
import eddie from './data/eddie.json';

export const handlers = [
  http.get("https://api.github.com/users/naravedv-diconium",
    () => HttpResponse.json(ed)),
  http.get("https://api.github.com/users/eddiejaoude",
    () => HttpResponse.json(eddie)),
]