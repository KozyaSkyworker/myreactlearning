import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={270}
    height={300}
    viewBox="0 0 270 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#dedede"
    {...props}>
    <rect x="510" y="232" rx="3" ry="3" width="88" height="6" />
    <rect x="110" y="95" rx="0" ry="0" width="1" height="0" />
    <rect x="15" y="8" rx="0" ry="0" width="240" height="200" />
    <rect x="15" y="223" rx="0" ry="0" width="70" height="30" />
    <rect x="15" y="260" rx="0" ry="0" width="70" height="26" />
    <rect x="155" y="239" rx="8" ry="8" width="100" height="34" />
  </ContentLoader>
);

export default Sceleton;
