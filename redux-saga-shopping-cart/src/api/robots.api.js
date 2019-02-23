import robots from '../mocks/robots.mock';

export const fetchAllRobots = async () => {
  await delay(1000);
  return robots;
};

function delay(ms) {
  if (Math.round(Math.random())) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  return Promise.resolve
}
