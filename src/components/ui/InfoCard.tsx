import React from 'react';
import styled from 'styled-components';

// 请根据下面每一段注释的具体要求，
// 为这个InfoCard组件生成对应的styled-components样式代码。

// CardWrapper (卡片的最外层容器):
// - 应该是一个宽度为320px的div。
// - 背景颜色为白色 (#ffffff)。
// - 拥有一个柔和、扩散的盒子阴影 (box-shadow)。
// - 四周的边角应有12px的圆角 (border-radius)。
// - 为了内容不贴边，需要24px的内边距 (padding)。
// - 当鼠标悬停在卡片上时，阴影应该变得更深，同时卡片有一个轻微向上浮动(-4px)的效果。
// - 所有交互效果的过渡 (transition) 都应该是平滑的 (例如 0.3s ease-in-out)。

// Title (卡片标题):
// - 这是一个h3标签。
// - 字体颜色为深灰色 (#333)。
// - 字体大小为20px，且为粗体 (font-weight: 700)。
// - 与下方的描述文字之间，需要有16px的底部外边距 (margin-bottom)。

// Description (描述文字):
// - 这是一个p标签。
// - 字体颜色为中等灰色 (#666)。
// - 行高 (line-height) 请设为1.6，使其更易于阅读。
// - 与下方的按钮之间，需要有24px的底部外边距。

// ActionButton (操作按钮):
// - 这是一个button标签。
// - 默认背景色为蓝色 (#007bff)，字体为白色。
// - 没有边框 (border: none)。
// - 拥有8px的圆角和适中的内边距 (上下10px，左右20px)。
// - 当鼠标悬停时，背景色应该变得更暗一些 (例如 #0056b3)。

const InfoCard = () => {
  return (
    <CardWrapper>
      <Title>这是一个卡片标题</Title>
      <Description>
        这是一段描述性文字。AI将会根据用自然语言编写的注释，来为这段文字和它的容器，乃至整个卡片组件，添加丰富的、精确的样式。
      </Description>
      <ActionButton>了解更多</ActionButton>
    </CardWrapper>
  );
};

// --- AI，请将所有生成的styled-components代码写在这里 ---

// CardWrapper (卡片的最外层容器)
const CardWrapper = styled.div`
  width: 320px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease-in-out;
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

// Title (卡片标题)
const Title = styled.h3`
  color: #333;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
  margin-top: 0;
`;

// Description (描述文字)
const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
  margin-top: 0;
`;

// ActionButton (操作按钮)
const ActionButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  font-size: 14px;
  font-weight: 500;
  
  &:hover {
    background-color: #0056b3;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export default InfoCard;
