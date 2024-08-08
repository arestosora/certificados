<template>
    <div class="warning-message-container" v-if="visible">
      <div class="warning-message">
        <i class="fas fa-exclamation-circle"></i>
        <h2>¡Advertencia!</h2>
        <p>{{ message }}</p>
        <button @click="closeMessage">Cerrar</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    name: 'WarningMessage',
    props: {
      message: {
        type: String,
        required: true
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      closeMessage() {
        this.$emit('update:visible', false);
      }
    }
  }
  </script>
  
  <style scoped>
  .warning-message-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    animation: fadeIn 0.5s ease-out;
  }
  
  .warning-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeeba;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    animation: slideIn 0.5s ease-out;
  }
  
  .warning-message i {
    font-size: 4rem;
    color: #856404;
    margin-bottom: 20px;
  }
  
  .warning-message h2 {
    margin: 10px 0;
    font-size: 2rem;
  }
  
  .warning-message p {
    margin: 0 0 20px;
    font-size: 1.2rem;
  }
  
  .warning-message button {
    padding: 10px 20px;
    background-color: #856404;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .warning-message button:hover {
    background-color: #6c4f02;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateY(-20px);
    }
    to {
      transform: translateY(0);
    }
  }
  </style>
  