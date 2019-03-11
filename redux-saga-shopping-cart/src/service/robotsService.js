import robots from '../mocks/robots.mock';

export const fetchAllRobots = async () => {
  await randomDelay(1000);
  return robots;
};

function randomDelay(ms) {
  if (Math.round(Math.random())) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  return Promise.resolve
}
