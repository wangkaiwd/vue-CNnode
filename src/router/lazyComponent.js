export const getComponent = path => () => import(`@/pages/${path}`);
