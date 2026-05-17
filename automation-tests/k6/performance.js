import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  duration: '10s',
  thresholds: {
    http_req_duration: ['p(95)<200'], // 95% das reqs devem responder abaixo de 200ms
  },
};

export default function () {
  const res = http.get('http://localhost:8080/api/todos');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}