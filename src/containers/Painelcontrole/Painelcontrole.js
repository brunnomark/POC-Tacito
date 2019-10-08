import React from 'react';
import './Painelcontrole.css';
import Checkbox from '../../components/Checkbox/Checkbox';
import tiposPainelcontrole from '../../components/Utility/TiposPainelcontrole';

const painelcontrole = (props) => {
    let painelControleClasses = 'painelcontrole';
    if (props.collapse) {
        painelControleClasses = 'painelcontrole open';
    }

    let importacoes = [tiposPainelcontrole.Unifer, tiposPainelcontrole.UccsUnifer, tiposPainelcontrole.Unicom,
        tiposPainelcontrole.UccsUnicom, tiposPainelcontrole.CorredoresDistancias, tiposPainelcontrole.AreasOperacionais,
        tiposPainelcontrole.Rodoviarios, tiposPainelcontrole.OTM];
        
    const items = importacoes.map(value => {                
        return (
            <li>
                <Checkbox
                    value={value}
                    inputProps={{
                        'aria-label': 'primary checkbox'
                    }}
                />
            </li>
        )                
    });

    return (
        <div className={painelControleClasses}>
            <h1> Painel de Controle </h1>
            <h2>
                <span className="block-1">Definições</span> 
                <span className="block-2">Última execução</span>
            </h2>
            <button><i class="fa fa-play-circle-o"></i> Executar </button>
            <ul>{items}</ul>
        </div>
    );    
}

export default painelcontrole;