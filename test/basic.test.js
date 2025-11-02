const request=require('supertest');const app=require('../index');
describe('root',()=>{it('ok json',async()=>{const r=await request(app).get('/');if(!r.body.ok)throw new Error('not ok');});});
