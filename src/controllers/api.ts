import { Request, Response } from 'express';
import request from 'request';
const pjson = require('pjson');
import { buildUrl } from '../util/url-builder';

export let getApi = (req: Request, res: Response) => {
  request(buildUrl(req.url), (error, response, body) => {
    res.status(response.statusCode);
    res.json(JSON.parse(body));
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
