import React from 'react'
import ToolsItem from '../_common/ToolsItem';
import iconMap from '../../utils/iconMap';

function ToolsNoopen({ category, tools }) {
  return (
    <div className="toolsNoopen">
      <p className="category-title">
        {category}
      </p>

      <div className="frontTools">
        {tools.map((tool) => {
          const IconComponent = iconMap[tool.icon]; //iconMap.js 에 적어둔 컴포넌트 꺼내기(컴포넌트 함수: iconMap["HtmlIcon"])
          return (
            <ToolsItem
              key={tool.title}
              icons={IconComponent ? <IconComponent /> : null} //</> 씌워서 컴포넌트 만들기
              title={tool.title}
              color={tool.color}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ToolsNoopen