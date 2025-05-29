# 🚀 Node.js DevSecOps Deployment with Docker & Kubernetes

![Kubernetes](https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![DevSecOps](https://img.shields.io/badge/devsecops-%231572B6.svg?style=for-the-badge&logo=security&logoColor=white)

A **DevSecOps-ready project** for deploying a containerized Node.js web application using Docker and Kubernetes with integrated security best practices.


## ⚙️ Deployment Guide

### 1. Build and Push Docker Image

```
docker build -t your-dockerhub-username/secure-node-app:latest .
docker push your-dockerhub-username/secure-node-app:latest
```
2. Deploy on Kubernetes
```
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
```

## 🖥️ Monitoring Commands
```
kubectl get deployments
kubectl get pods
kubectl get svc
kubectl logs -f <pod-name>
```
## 🌐 Accessing the App
Local Kubernetes (NodePort): http://localhost:<NodePort>

## Demonstration:
![WhatsApp Image 2025-05-23 at 23 46 54_893c959d](https://github.com/user-attachments/assets/5331a1d3-58bf-4b34-b6f7-f874dd3d958b)



👩‍💻 Contributors

Aicha NASIH

Salma HERMAK

Khadija BOUYOUSSEF

📘 Note: This project demonstrates end-to-end DevSecOps principles—integrating development, security, and operations in a Kubernetes-native workflow.

