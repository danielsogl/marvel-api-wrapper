import axios from 'axios';
import { Request, Response } from 'express';
import pjson from 'pjson';

import { buildUrl } from '../util/url-builder';

export let getApi = (req: Request, res: Response) => {
  axios
    .get(buildUrl(req.url))
    .then(response => {
      res.status(response.status);
      res.json(response.data);
    })
    .catch(err => {
      res.status(501);
      res.send('Internal Server Error');
    });
};

export let getInfo = (req: Request, res: Response) => {
  res.status(200).json({
    name: 'Marvel API Wrapper',
    version: pjson.version,
    author: pjson.author,
    contributors: pjson.contributors,
    repository: pjson.repository.url
  });
};
