import { supabase } from '../auth/supabase.js';
import { getCurrentUser } from '../auth/user.js';

export async function toggleFavorite(game) {
    const user = getCurrentUser();

    if (!user) {
        alert('Login first');
        return;
    }

    // 1. проверяем есть ли уже в базе
    const { data: existing } = await supabase
        .from('favorites')
        .select('*')
        .eq('user_id', user.id)
        .eq('game_id', game.id)
        .maybeSingle();

    if (existing) {
        //  УДАЛИТЬ
        const { error } = await supabase
            .from('favorites')
            .delete()
            .eq('user_id', user.id)
            .eq('game_id', game.id);

        if (error) {
            console.error(error);
            return;
        }
        console.log('Removed from favorites');
    } else {
        //  ДОБАВИТЬ    
        const { error } = await supabase
            .from('favorites')
            .insert({
                user_id: user.id,
                game_id: game.id,
                game_name: game.name,
                game_img: game.background_image
            });

        if (error) {
            console.error(error);
            alert('Error adding to favorites');
        } else {
            alert('Added to favorites');
        }
    }

}



export async function getFavorites() {
    const user = getCurrentUser();

    if (!user) return [];

    const { data, error } = await supabase
        .from('favorites')
        .select('game_id')
        .eq('user_id', user.id);

    if (error) {
        console.error(error);
        return [];
    }

    return data.map(item => item.game_id);
}