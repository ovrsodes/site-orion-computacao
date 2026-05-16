document.addEventListener('DOMContentLoaded', () => {
    
    
    const botaoConhecer = document.getElementById('btn-conhecer');
    const secaoAreas = document.getElementById('areas');

    
    if (botaoConhecer && secaoAreas) {
        botaoConhecer.addEventListener('click', (event) => {
            
            event.preventDefault(); 

            
            secaoAreas.scrollIntoView({
                behavior: 'smooth', 
                block: 'start'      
            });
        });
    }
});