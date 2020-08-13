/* eslint-disable */

import request from 'superagent';

const URL = 'https://guarded-beach-96626.herokuapp.com/';

export function fetchPlayers() {
    return request.get(`${URL}/players`);
    }

    export function fetchPlayer(id) {
    return request.get(`${URL}/players/${id}`);
    }
  