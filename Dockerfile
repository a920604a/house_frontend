# 使用官方 Node.js 基础镜像
FROM node:latest

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json 文件并安装依赖


# 复制整个项目文件到工作目录
COPY ./app/ /
COPY docker-entrypoint.sh /bin/docker-entrypoint.sh
RUN chmod +x /bin/docker-entrypoint.sh

ENTRYPOINT [ "/bin/bash", "docker-entrypoint.sh" ]


RUN npm install
# RUN npm install react-scripts -g

# 构建前端应用
# RUN npm run build

# 安装 serve 包
# RUN npm install -g serve



# 设置环境变量
ENV REACT_APP_BACKEND_URL=http://backend:8000


# 运行前端应用
# CMD ["serve", "-s", "build", "-l", "3000"]
CMD ["npm","start"]

