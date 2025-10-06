/**
 * 默认模板统一导入
 * 
 * 🎯 极简设计：模板自身包含完整信息，无需额外配置
 */

// 导入所有模板
import { template as general_optimize } from './optimize/general-optimize';
import { template as general_optimize_en } from './optimize/general-optimize_en';
import { template as output_format_optimize } from './optimize/output-format-optimize';
import { template as output_format_optimize_en } from './optimize/output-format-optimize_en';
import { template as analytical_optimize } from './optimize/analytical-optimize';
import { template as analytical_optimize_en } from './optimize/analytical-optimize_en';
import { template as context_iterate } from './iterate/context/context-iterate';
import { template as context_iterate_en } from './iterate/context/context-iterate_en';
// 新增对齐的系统上下文模板：通用版（中/英）
import { template as context_general_optimize } from './optimize/context/context-general-optimize';
import { template as context_general_optimize_en } from './optimize/context/context-general-optimize_en';
// 新增对齐的系统上下文模板：分析型/输出格式（中/英）
import { template as context_analytical_optimize } from './optimize/context/context-analytical-optimize';
import { template as context_analytical_optimize_en } from './optimize/context/context-analytical-optimize_en';
import { template as context_output_format_optimize } from './optimize/context/context-output-format-optimize';
import { template as context_output_format_optimize_en } from './optimize/context/context-output-format-optimize_en';
// 新增对齐的用户上下文模板（基础/专业/规划）（中/英）
import { template as context_user_prompt_basic } from './user-optimize/context/context-user-prompt-basic';
import { template as context_user_prompt_basic_en } from './user-optimize/context/context-user-prompt-basic_en';
import { template as context_user_prompt_professional_ctx } from './user-optimize/context/context-user-prompt-professional';
import { template as context_user_prompt_professional_ctx_en } from './user-optimize/context/context-user-prompt-professional_en';
import { template as context_user_prompt_planning_ctx } from './user-optimize/context/context-user-prompt-planning';
import { template as context_user_prompt_planning_ctx_en } from './user-optimize/context/context-user-prompt-planning_en';

import { template as iterate } from './iterate/iterate';
import { template as iterate_en } from './iterate/iterate_en';

import { user_prompt_professional } from './user-optimize/user-prompt-professional';
import { user_prompt_professional_en } from './user-optimize/user-prompt-professional_en';
import { user_prompt_basic } from './user-optimize/user-prompt-basic';
import { user_prompt_basic_en } from './user-optimize/user-prompt-basic_en';
import { user_prompt_planning } from './user-optimize/user-prompt-planning';
import { user_prompt_planning_en } from './user-optimize/user-prompt-planning_en';

// 图像优化模板（重构后的目录结构）
// 文生图
import { template as image_general_optimize } from './image-optimize/text2image/general-image-optimize';
import { template as image_general_optimize_en } from './image-optimize/text2image/general-image-optimize_en';
import { template as image_chinese_optimize } from './image-optimize/text2image/chinese-model-optimize';
import { template as image_chinese_optimize_en } from './image-optimize/text2image/chinese-model-optimize_en';
import { template as image_photography_optimize } from './image-optimize/text2image/photography-optimize';
import { template as image_photography_optimize_en } from './image-optimize/text2image/photography-optimize_en';
import { template as image_creative_text2image } from './image-optimize/text2image/creative-text2image';
import { template as image_creative_text2image_en } from './image-optimize/text2image/creative-text2image_en';
// 图生图
import { template as image2image_optimize } from './image-optimize/image2image/image2image-optimize';
import { template as image2image_optimize_en } from './image-optimize/image2image/image2image-optimize_en';
import { template as image2image_design_text_edit_optimize } from './image-optimize/image2image/design-text-edit-optimize';
import { template as image2image_design_text_edit_optimize_en } from './image-optimize/image2image/design-text-edit-optimize_en';
// 图像迭代
import { template as image_iterate_general } from './image-optimize/iterate/image-iterate-general';
import { template as image_iterate_general_en } from './image-optimize/iterate/image-iterate-general_en';

// 简单的模板集合 - 模板自身已包含完整信息（id、name、language、type等）
export const ALL_TEMPLATES = {
  general_optimize,
  general_optimize_en,
  output_format_optimize,
  output_format_optimize_en,
  analytical_optimize,
  analytical_optimize_en,
  context_iterate,
  context_iterate_en,
  context_general_optimize,
  context_general_optimize_en,
  context_analytical_optimize,
  context_analytical_optimize_en,
  context_output_format_optimize,
  context_output_format_optimize_en,
  context_user_prompt_basic,
  context_user_prompt_basic_en,
  context_user_prompt_professional_ctx,
  context_user_prompt_professional_ctx_en,
  context_user_prompt_planning_ctx,
  context_user_prompt_planning_ctx_en,
  user_prompt_professional,
  user_prompt_professional_en,
  iterate,
  iterate_en,
  user_prompt_basic,
  user_prompt_basic_en,
  user_prompt_planning,
  user_prompt_planning_en,
  // 图像优化模板
  image_general_optimize,
  image_general_optimize_en,
  image_chinese_optimize,
  image_chinese_optimize_en,
  image_photography_optimize,
  image_photography_optimize_en,
  image_creative_text2image,
  image_creative_text2image_en,
  // 图生图模板
  image2image_optimize,
  image2image_optimize_en,
  image2image_design_text_edit_optimize,
  image2image_design_text_edit_optimize_en,
  // 图像迭代模板
  image_iterate_general,
  image_iterate_general_en,
};
