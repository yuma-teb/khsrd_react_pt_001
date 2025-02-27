# must run as sudo
docker build -t yamu-prac-container-001 .
docker run -p 5173:5173 yamu-prac-container-001